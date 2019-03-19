<template>
    <Page class="page" actionBarHidden="true" backgroundSpanUnderStatusBar="true">

        <GridLayout rows="auto,auto,*,auto" columns="auto">

            <GridLayout row="0" ref="navStatusBar" class="navStatusBar" backgroundColor="deepskyblue" verticalAlignment="top" height="40"
                        width="100%" rows="auto" columns="*,auto,auto,auto">
                <Label col="0" row="0" text="Accueil" class="status-title"></Label>
                <Image horizontalAlignment="right" stretch="aspectFill" col="3"
                       row="0" class="status-profile" src="~/assets/images/me.jpg"/>
            </GridLayout>

            <GridLayout  row="1" ref="navTab" class="navTab" verticalAlignment="top" height="50"
                         width="100%"  rows="auto" columns="auto,auto,auto">

                <GridLayout class="tabview" :class="selectedTabview==0?'active':''"
                            @tap="popular" rows="*,auto" cols="auto" col="0" row="0"
                            width="33%">

                    <Label :class="selectedTabview==0?'active':''" row="1"
                           text="Série" class="tabviewText"></Label>
                </GridLayout>
                <GridLayout class="tabview" :class="selectedTabview==1?'active':''"
                            @tap="showCategory" rows="*,auto" cols="auto" col="1" row="0"
                            width="34%">
                    <Image v-show="selectedTabview == 1" row="0" class="navIcon"
                           :src="selectedTabview==1?'~/assets/images/category.png':''"/>
                    <Label :class="selectedTabview==1?'active':''" row="1" text="Photos" @tap="$navigateTo(TakeP)" class="tabviewText"></Label>
                </GridLayout>
                <GridLayout class="tabview" :class="selectedTabview==2?'active':''"
                            @tap="showPromos" rows="*,auto" cols="auto" col="2" row="0"
                            width="33%">
                    <Image v-show="selectedTabview == 2" row="0" class="navIcon"
                           :src="selectedTabview==2?'~/assets/images/category.png':''"/>
                    <Label :class="selectedTabview==2?'active':''" row="1"
                           text="DECONNEXION" class="tabviewText"  @tap="$navigateTo(LoginP)"></Label>
                </GridLayout>

            </GridLayout>
<GridLayout v-show="selectedTabview == 0" row="2" width="100%" backgroundColor="white">
    <ListView ref="listview" separatorColor="transparent" for="item in items" :key="index">
        <v-template>
            <item :item="item" @clicked="showItem(item)" />
        </v-template>
    </ListView>
</GridLayout>

<GridLayout v-show="selectedTabview == 2" row="2" width="100%" backgroundColor="white">
</GridLayout>


        </GridLayout>

    </Page>
</template>
<script>
    // import { SwissArmyKnife } from "nativescript-swiss-army-knife";
    import { isIOS, isAndroid } from 'tns-core-modules/platform'
    import navBottom from "./custom/navBottom";
    import Item from "./custom/item";
    import ItemDetails from "./ItemDetails";
    import LoginPage from "./LoginPage.vue";
    import TakePhoto from "./TakePhoto";



    export default {
        components: {
            TakeP: TakePhoto,
            navBottom,
            Item
        },
        computed: {
        },

        mounted () {
            // SwissArmyKnife.setAndroidStatusBarColor("#b51213");
        },
        data() {
            return {

                LoginP :  LoginPage,
                lastDelY: 0,
                headerCollapsed: false,
                selectedTab: 0,
                selectedTabview: 0,
                items: [{
                    name: "Salade accompagnés de ses légumes",
                    cover: "~/assets/images/food/salade640.jpg",
                    images: [
                        {src: "~/assets/images/food/salade/salade1.jpg"},
                        {src: "~/assets/images/food/salade/salade2.jpg"},
                        {src: "~/assets/images/food/salade/salade3.jpg"},
                        {src: "~/assets/images/food/salade/salade4.jpg"},
                        {src: "~/assets/images/food/salade/salade5.jpg"},
                        {src: "~/assets/images/food/salade/salade6.jpg"},
                    ],
                    category: "Salade",
                    categoryTag: "#2D9CDB",
                    price: "10.00",
                    likes: 987,
                    isLike: true,
                    isFavorite: true,
                    comments: 13,
                    rating: "4.5",
                    description: "a"
                },
                    {
                        name: "Recette au yogourt et aux baies minceur",
                        cover: "~/assets/images/food/ptitdej640.jpg",
                        images: [
                            {src: "~/assets/images/food/dejeuner/ptidej1.jpg"},
                            {src: "~/assets/images/food/dejeuner/ptidej2.jpg"},
                            {src: "~/assets/images/food/dejeuner/ptidej3.jpg"},
                            {src: "~/assets/images/food/dejeuner/ptidej4.jpg"},
                            {src: "~/assets/images/food/dejeuner/ptidej5.jpg"},
                            {src: "~/assets/images/food/dejeuner/ptidej6.jpg"}
                        ],
                        category: "Petit Déjeuner",
                        categoryTag: "#e4ce0d",
                        price: "230.00",
                        likes: 891,
                        isLike: false,
                        isFavorite: false,
                        comments: 7,
                        rating: "4.0",
                        description: "a"
                    },
                    {
                        name: "Panna cotta à la fraise et au yogourt",
                        cover: "~/assets/images/food/cake640.jpg",
                        images: [
                            {src: "~/assets/images/food/cake/cake1.jpg"},
                            {src: "~/assets/images/food/cake/cake2.jpg"},
                            {src: "~/assets/images/food/cake/cake3.jpg"},
                            {src: "~/assets/images/food/cake/cake4.jpg"}
                        ],
                        category: "Dessert",
                        categoryTag: "#27AE60",
                        price: "300.00",
                        likes: 730,
                        isLike: true,
                        isFavorite: true,
                        comments: 11,
                        rating: "4.0",
                        description: "a"
                    },
                ],
                category: [
                    {
                        cover: "~/assets/images/food/burger640.jpg",
                        category: "BURGER",
                        count: "13",
                    },
                    {
                        cover: "~/assets/images/food/pancake640.jpg",
                        category: "PANCAKE",
                        count: "5",
                    },
                    {
                        cover: "~/assets/images/food/cake640.jpg",
                        category: "CAKE",
                        count: "9",
                    },
                    {
                        cover: "~/assets/images/food/beer640.jpg",
                        category: "BEER",
                        count: "7",
                    },

                ]
            };
        },
        methods: {
            search(){
                console.log('search')
            },
            bell(){
                console.log('bell')
            },
            showItem(payload) {
                this.$navigateTo(ItemDetails,{
                    props: {
                        item: payload
                    },
                    animated: true,
                    transition: {
                        name: "slideTop",
                        duration: 380,
                        curve: "easeIn"
                    }
                })
            },

            popular() {
                this.selectedTabview = 0;
            },
            showCategory() {
                this.selectedTabview = 1;
            },
            showPromos() {
                this.selectedTabview = 2;
            },
            home() {
                this.selectedTab = 0;
            },
            cart() {
                this.selectedTab = 1;
            },
            history() {
                this.selectedTab = 2;
            },
            about() {
                this.selectedTab = 3;
            }

        }
    };
</script>

<style>
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
</style>
