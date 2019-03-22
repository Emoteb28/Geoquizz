<template>
  <Page>
    <ActionBar>
      <GridLayout width="100%" columns="auto, *">
        <Label text="MENU" @tap="$refs.drawer.nativeView.showDrawer()" col="0"/>
        <Label class="title" col="1"/>
      </GridLayout>
    </ActionBar>

    <RadSideDrawer ref="drawer">
      <StackLayout ~drawerContent backgroundColor="#ffffff">
        <Label class="drawer-header" text="GeoQuizz"/>

        <Label class="drawer-item" text="SERIES" @tap="goToSeries"/>
        <Label class="drawer-item" text="CREATE SERIE" @tap="goToCreateSerie"/>
        <Label class="drawer-item" text="CREATE PHOTO" @tap="goToCreatephoto"/>
        <Label class="drawer-item" text="DECONNEXION" @tap="goToLogin"/>
      </StackLayout>

      <GridLayout ~mainContent columns="*" rows="*">
        <StackLayout orientation="vertical" width="100%" height="100%" backgroundColor="lightgray">
          <ListView
            class="list-group"
            for="photo in thePhotos"
            @itemTap="showDetailPageModally"
            style="height:1250px"
            width="100%"
          >
            <v-template>
              <FlexboxLayout flexDirection="row" class="list-group-item">
                <Image
                  :src="'http://7da64424.ngrok.io/uploads/'+photo.url"
                  class="thumb img-circle"
                />
                <Label :text="photo.desc" class="list-group-item-heading" style="width: 60%"/>
              </FlexboxLayout>
            </v-template>
          </ListView>
        </StackLayout>
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
import * as geolocation from "nativescript-geolocation";
import { Accuracy } from "tns-core-modules/ui/enums";

import { takePicture, requestPermissions } from "nativescript-camera";

const Detail = {
  props: ['url'],
  template: `
    <Frame>
      <Page>
        <ActionBar title="Detail"/>
        <StackLayout>
        <Image :src="'http://7da64424.ngrok.io/uploads/'+url"
                  class="thumb img-circle"
                />
          <Button @tap="$modal.close" text="Close" />
        </StackLayout>
      </Page>
    </Frame>
  `
};
export default {
  props: ["token", "ville", "id"],
  data() {
    return {
      photos: []
    };
  },
  methods: {
      showDetailPageModally(args) {
      this.$showModal(Detail , { fullscreen: true, props: { url: this.photos[args.index].url }});
    },
    onButtonTap() {
      console.log("Button was pressed");
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
    },
    getPhotos() {
      return new Promise((resolve, reject) => {
        axios.defaults.headers.common["Authorization"] = "Bearer " + this.token;
        axios
          .get("http://7da64424.ngrok.io/series/" + this.id + "/photos")
          .then(response => {
            console.log(response.data);
            this.photos = response.data.photos;
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  },
  mounted() {},
  created() {
    this.getPhotos();
    console.log(this.ville);
  },
  computed: {
    thePhotos() {
      return this.photos;
    }
  }
};
</script>

<style scoped lang="scss">
#image {
}

.action-bar {
  background-color: deepskyblue;
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

.status-img {
  margin-top: 4;
  margin-right: 20;
  width: 30;
  height: 30;
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
  background-color: deepskyblue;
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