<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <Label class="action-bar-title" text="GeoQuizz"></Label>
        </ActionBar>

        <GridLayout rows="auto, *, auto, auto">
            <StackLayout row="0" orientation="vertical" padding="5">

            </StackLayout>
            <Image row="1" :src="cameraImage" id="image" stretch="aspectFit" margin="10"/>
            <TextView row="2" :text="labelText" editable="false"></TextView>>
            <Button row="3"  text="Take Picture" @tap="onTakePictureTap"  padding="10"/>
        </GridLayout>git p
    </Page>
</template>

<script>


    //import de la caméra
    import { takePicture, requestPermissions } from "nativescript-camera";
    export default {
        data() {
            return {
                saveToGallery: false,
                keepAspectRatio: true,
                width: 320,
                height: 240,
                cameraImage: null,
                labelText: ""
            }
        },
        methods: {
            onTakePictureTap: function(args) {
                let page = (args.object).page;
                let that = this;
                requestPermissions().then(
                    () => {
                        takePicture({ width: that.width, height: that.height, keepAspectRatio: that.keepAspectRatio, saveToGallery: that.saveToGallery }).
                        then((imageAsset) => {
                                that.cameraImage = imageAsset;
                                imageAsset.getImageAsync(function (nativeImage) {
                                    let scale = 1;
                                    let actualWidth = 0;
                                    let actualHeight = 0;
                                    if (imageAsset.android) {
                                        scale = nativeImage.getDensity() / android.util.DisplayMetrics.DENSITY_DEFAULT;
                                        actualWidth = nativeImage.getWidth();
                                        actualHeight = nativeImage.getHeight();
                                    } else {
                                        scale = nativeImage.scale;
                                        actualWidth = nativeImage.size.width * scale;
                                        actualHeight = nativeImage.size.height * scale;
                                    }
                                    that.labelText = `Displayed Size: ${actualWidth}x${actualHeight} with scale ${scale}\n` +
                                        `Image Size: ${Math.round(actualWidth / scale)}x${Math.round(actualHeight / scale)}`;
                                    console.log(`${labelText}`);
                                });
                            },
                            (err) => {
                                console.log("Error -> " + err.message);
                            });
                    },
                    () => alert('permissions rejected')
                );
            }
        }
    };
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '../app-variables';
    .fa {
        color: $accent-dark;
    }
    .info {
        font-size: 20;
    }
</style>
*
