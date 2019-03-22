<template>
  <Page>
    <ActionBar backgroundColor="deepskyblue">
      <GridLayout width="100%" columns="auto, *">
        <Label text="MENU" @tap="$refs.drawer.nativeView.showDrawer()" col="0"/>
        <Label class="title" col="1"/>
      </GridLayout>
    </ActionBar>

    <RadSideDrawer ref="drawer">
      <StackLayout ~drawerContent backgroundColor="#ffffff">
        <Label class="drawer-header" text="GeoQuizz"/>

        <Label class="drawer-item" text="SERIES" @tap="goToSeries"/>
        <Label class="drawer-item" text="CREATE SERIES" @tap="goToCreateSerie"/>
        <Label class="drawer-item" color="red" text="CREATE PHOTO" @tap="goToCreatephoto"/>
        <Label class="drawer-item" text="LOGOUT" @tap="goToLogin"/>
      </StackLayout>

      <GridLayout ~mainContent columns="*" rows="*">
        <GridLayout rows="auto,auto,*,auto" columns="auto">
          <GridLayout
            row="0"
            ref="navStatusBar"
            class="navStatusBar"
            backgroundColor="deepskyblue"
            verticalAlignment="top"
            height="0"
            width="100%"
            rows="auto"
            columns="*,auto,auto,auto"
          >
            <Label col="0" row="0" class="status-title"></Label>
          </GridLayout>

          <GridLayout
            class="tabview"
            :class="selectedTabview==1?'active':''"
            rows="*,auto"
            cols="auto"
            col="1"
            row="0"
            width="34%"
          >
            <Image
              v-show="selectedTabview == 1"
              row="0"
              class="navIcon"
              :src="selectedTabview==1?'~/assets/images/category.png':''"
            />
            
          </GridLayout>

          <StackLayout row="2" orientation="vertical" padding>
            
            <Button
              class="btnP"
              row="4"
              text="Take Picture"
              @tap="onTakePictureTap"
              -
              padding="10"
            />
            <Image row="2" :src="cameraImage" id="image" stretch="aspectFit" margin="8"/>
          </StackLayout>


          <StackLayout row="3" orientation="vertical" padding>

            <TextField class="textF" v-model="description" hint="Enter description..."/>

            <Button row="5" class="btnB" text="Send to backend" @tap="createPhoto" padding="10"/>
          </StackLayout>
        </GridLayout>
      </GridLayout>
    </RadSideDrawer>
  </Page>
</template>

<script>
    //import de la caméra
    import axios from "../axios/dist/axios";
    import LoginPage from "./LoginPage";
    import CreatePhoto from "./Home";
    import CreateSerie from "./createSerie";
    import Series from "./Series";
    import * as fs from "file-system";
    import * as geolocation from "nativescript-geolocation";
    import * as bghttp from "nativescript-background-http";
    import { Image } from "tns-core-modules/ui/image";
    import {
        Accuracy
    } from "tns-core-modules/ui/enums";

    import {
        takePicture,
        requestPermissions
    } from "nativescript-camera";
    import * as imageSourceModule from 'tns-core-modules/image-source';

    export default {
        props: ["token"],
        data() {
            return {
                description: "",
                lat: "",
                lon: "",
                locations: [],
                saveToGallery: false,
                keepAspectRatio: true,
                width: 320,
                height: 240,
                cameraImage: null,
                labelText: "",
                LoginP: LoginPage,
                myImg: null
            }
        },
        methods: {
            onTakePictureTap: function(args) {
                let page = args.object.page;
                let that = this;
                requestPermissions().then(
                    () => {
                        takePicture({
                            width: that.width,
                            height: that.height,
                            keepAspectRatio: that.keepAspectRatio,
                            saveToGallery: that.saveToGallery
                        }).then(
                            imageAsset => {
                                that.cameraImage = imageAsset;
                                this.myImg = new Image();
                                this.myImg.src = imageAsset;
                                this.getLocation();
                                imageAsset.getImageAsync(function(
                                    nativeImage) {
                                    let scale = 1;
                                    let actualWidth = 0;
                                    let actualHeight = 0;
                                    if (imageAsset.android) {
                                        scale =
                                            nativeImage.getDensity() /
                                            android.util.DisplayMetrics
                                            .DENSITY_DEFAULT;
                                        actualWidth =
                                            nativeImage.getWidth();
                                        actualHeight =
                                            nativeImage.getHeight();
                                    } else {
                                        scale =
                                            nativeImage.scale;
                                        actualWidth =
                                            nativeImage.size
                                            .width *
                                            scale;
                                        actualHeight =
                                            nativeImage.size
                                            .height *
                                            scale;
                                    }

                                    console.log(imageAsset);
                                    console.log('mlkmlklmkmlkmlkmlkmlkmlkm');
                                });
                            },
                            err => {
                                console.log("Error -> " + err.message);
                            }
                        );
                    },
                    () => alert("permissions rejected")
                );
            },
            createPhoto() {
                

                  let session = bghttp.session("image-upload");
                  let request = {
                        url: 'http://7da64424.ngrok.io/photos',
                        method: 'POST',
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            'Authorization': "Bearer " + this.token
                        }
                    }
  

                    var params = [
                    { name: "desc", value: this.description },
                    { name: "lat", value: this.lat.toString() },
                    { name: "lng", value: this.lon.toString() },
                    { name: "image", filename: this.myImg.src.android, mimeType: 'image/jpeg' }
                    ];

                    let task = session.multipartUpload(params, request);

                    task.on('error', e => {
                      console.log('error', e);
                    });

                    task.on('complete', e => {
                      console.log('complete', JSON.stringify(e));
                      
                    });
               
               
            },
            getLocation() {
                geolocation
                    .getCurrentLocation({
                        desiredAccuracy: Accuracy.high,
                        maximumAge: 5000,
                        timeout: 20000
                    })
                    .then(res => {
                        this.lat = res.latitude;
                        this.lon = res.longitude;
                        console.log(this.lat);

                        fetch(
                                "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
                                res.latitude +
                                "," +
                                res.longitude +
                                "&key=YOUR-API-KEY"
                            )
                            .then(response => response.json())
                            .then(r => {
                                this.addr = r.results[0].formatted_address;
                            });
                    });
            },
            mounted() {
                geolocation.enableLocationRequest();
            },
            goToSeries(args) {
                this.$navigateTo(Series, {
                    props: {
                        token: this.token
                    }
                });
            },
            goToCreateSerie(args) {
                this.$navigateTo(CreateSerie, {
                    props: {
                        token: this.token
                    }
                });
            },
            goToCreatephoto(args) {
                this.$navigateTo(CreatePhoto, {
                    props: {
                        token: this.token
                    }
                });
            },
            goToLogin(args) {
                this.$navigateTo(LoginPage);
            }
        }
    }
</script>

<style scoped lang="scss">
.action-bar {
  background-color: deepskyblue;
}
.textF {
}
#bouton {
  color: deepskyblue;
  background-color: deepskyblue;
}

.tabview.active {
  border-bottom-color: white;
  border-bottom-width: 3;
  margin: 0;
  height: 50;
}

.tabviewText {
  margin-top: 15;
  margin-bottom: 5;
  font-size: 13;
  color: #d8d2d2;
  horizontal-align: center;
}

.tabviewText.active {
  margin-top: 0;
  margin-bottom: 5;
  font-weight: bold;
  color: white;
  vertical-align: center;
}

.navTab {
  background-color: deepskyblue;
}

.navTabview {
  background-color: blue;
}

.progressbar {
    height: 50;
    margin: 10;
    border-radius: 10;
    border-color: black;
    border-width: 1;
}
.progressbar-value {
    background: #337ab7;
}

.status-img {
  margin-top: 4;
  margin-right: 20;
  width: 30;
  height: 30;
}

.btnP {
  background-color: deepskyblue;
  border-radius: 20px;
  width: 400px;
  color: white;
  margin-top: -30px;
}

.btnB {
  background-color: deepskyblue;
  width: 100%;
  color: white;
}

.status-profile {
  border-width: 1;
  border-color: #ffffff;
  background-color: #f1ebeb;
  border-radius: 50%;
  margin-top: 4;
  margin-right: 15;
  width: 30;
  height: 30;
}

.status-title {
  color: white;
  font-size: 18;
  margin-left: 15;
  margin-top: 8;
  horizontal-align: left;
  vertical-align: center;
}

ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}

.title {
  text-align: left;
  padding-left: 16;
}

.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}

.drawer-header {
  padding: 50 16 16 16;
  margin-bottom: 16;
  background-color: deepskyblue;
  color: #ffffff;
  font-size: 24;
}

.drawer-item {
  padding: 8 16;
  color: #333333;
  font-size: 16;
}
</style>