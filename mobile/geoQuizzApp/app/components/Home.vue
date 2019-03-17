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

        </GridLayout>

    </Page>
</template>

<script>
    //import de la caméra


    import TakePhoto from "./TakePhoto.vue";
    import LoginPage from "./LoginPage.vue";
    export default {
        data() {
            return {
                TakeP : TakePhoto,
                LoginP: LoginPage
            }
        }
    }
</script>

<style scoped lang="scss">
.action-bar{
    background-color: deepskyblue;
}
    #bouton{
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
</style>


