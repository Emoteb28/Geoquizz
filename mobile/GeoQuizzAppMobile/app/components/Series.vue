<template>
    <Page>
        <ActionBar backgroundColor="deepskyblue">
            <GridLayout width="100%" columns="auto, *" backgroundColor="deepskyblue">
                <Label text="MENU" @tap="$refs.drawer.nativeView.showDrawer()"
                    col="0"/>
                <Label class="title" col="1" />
            </GridLayout>
        </ActionBar>

        <RadSideDrawer ref="drawer">
            <StackLayout ~drawerContent backgroundColor="#ffffff"
                >
                <Label class="drawer-header" text="GeoQuizz" />

                <Label class="drawer-item" text="SERIES" @tap="goToSeries" />
                <Label class="drawer-item" text="CREATE SERIES" @tap="goToCreateSerie" />
                <Label class="drawer-item" color="red" text="CREATE PHOTO"
                    @tap="goToCreatephoto" />
                <Label class="drawer-item" text="LOGOUT" @tap="goToLogin" />
            </StackLayout>

            <GridLayout ~mainContent columns="*" rows="*">

                <StackLayout orientation="vertical" width="100%" height="100%"
                    backgroundColor="lightgray">
                    <ListView class="list-group" for="serie in series"
                        @itemTap="onButtonTap" style="height:1250px">
                        <v-template>
                            <FlexboxLayout flexDirection="row" class="list-group-item">
                                <Label :text="serie.ville" class="list-group-item-heading"
                                    style="width: 60%" />
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
    import SeriePhotos from "./seriePhotos";
    import * as geolocation from "nativescript-geolocation";
    import {
        Accuracy
    } from "tns-core-modules/ui/enums";

    import {
        takePicture,
        requestPermissions
    } from "nativescript-camera";
    export default {
        props: ["token"],
        data() {
            return {
                lat: "",
                lon: "",
                series: []
            };
        },
        methods: {
            onButtonTap(args) {
                this.$navigateTo(SeriePhotos, {
                    props: {
                        token: this.token,
                        ville: this.series[args.index].ville,
                        id: this.series[args.index].id
                    }
                });
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

            getSeries() {
                return new Promise((resolve, reject) => {
                    axios.defaults.headers.common["Authorization"] =
                        "Bearer " + this.token;
                    axios
                        .get("http://7a1d673b.ngrok.io/series")
                        .then(response => {
                            //alert(response.data);
                            console.log(response.data);
                            this.series = response.data.series;
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
            this.getSeries();
        },
        computed: {
            theSeries() {
                return this.series;
            }
        }
    };
</script>

<style scoped lang="scss">
    #image {}

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
        background-color: deepskyblue;
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
        vertical-align:
            center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }

    .drawer-header {
        padding: 50 16 16 16;
        margin-bottom: 16;
		background-color:deepskyblue;
        color: #ffffff;
        font-size: 24;
    }

    .drawer-item {
        padding: 8 16;
        color: #333333;
        font-size: 16;
    }
</style>