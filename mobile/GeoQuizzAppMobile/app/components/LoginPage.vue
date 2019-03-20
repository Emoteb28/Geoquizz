<template>
    <Page actionBarHidden="true">
        <FlexboxLayout class="page">
            <StackLayout class="form">
                <Image class="logo" src="~/images/logo.png"></Image>
                <Label class="header" text="GEOQUIZZ" color="deepskyblue"></Label>

                <GridLayout rows="auto, auto, auto">
                    <StackLayout v-if="isLoggingIn == false" row="0" class="input-field">
                        <TextField class="input" hint="Fullname" :isEnabled="!processing"
                            keyboardType="text" autocorrect="false"
                            autocapitalizationType="none" v-model="user.fullname"
                            returnKeyType="next" @returnPress="focusPassword"></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <StackLayout row="1" class="input-field">
                        <TextField class="input" hint="Email" :isEnabled="!processing"
                            keyboardType="email" autocorrect="false"
                            autocapitalizationType="none" v-model="user.email"
                            returnKeyType="next" @returnPress="focusPassword"></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <StackLayout row="2" class="input-field">
                        <TextField class="input" ref="password" :isEnabled="!processing"
                            hint="Password" secure="true" v-model="user.password"
                            :returnKeyType="isLoggingIn ? 'done' : 'next'"
                            @returnPress="focusConfirmPassword"></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>


                    <ActivityIndicator rowSpan="3" :busy="processing"></ActivityIndicator>
                </GridLayout>

                <Button :text="isLoggingIn ? 'Log In' : 'Sign Up'" :isEnabled="!processing"
                    @tap="submit" class="btn btn-primary m-t-20" borderRadius="20px"></Button>
                <Label *v-show="isLoggingIn" text="Forgot your password?"
                    class="login-label" @tap="forgotPassword()"></Label>
            </StackLayout>

            <Label class="login-label sign-up-label" @tap="toggleForm">
                <FormattedString>
                    <Span :text="isLoggingIn ? 'Don’t have an account? ' : 'Back to Login'"></Span>
                    <Span :text="isLoggingIn ? 'Sign up' : ''" class="bold"></Span>
                </FormattedString>
            </Label>
        </FlexboxLayout>
    </Page>
</template>

<script>
    import Home from "./Home";
    import Series from "./Series";
    import axios from "../axios/dist/axios";

    export default {
        data() {
            return {
                isLoggingIn: true,
                processing: false,
                user: {
                    fullname: "",
                    email: "",
                    password: ""
                }
            };
        },
        methods: {
            toggleForm() {
                this.isLoggingIn = !this.isLoggingIn;
            },

            submit() {
                if (!this.user.email || !this.user.password) {
                    this.alert(
                        "Please provide both an email address and password."
                    );
                    return;
                }

                this.processing = true;
                if (this.isLoggingIn) {
                    this.login();
                } else {
                    this.register();
                }
            },

            login() {
                return new Promise((resolve, reject) => {
                    axios
                        .post(
                            "http://7a1d673b.ngrok.io/login", {}, {
                                auth: {
                                    username: this.user.email,
                                    password: this.user.password
                                }
                            }
                        )
                        .then(response => {
                            console.log(response.data.token);
                            this.$navigateTo(Series, {
                                props: {
                                    token: response.data.token
                                }
                            });
                            resolve(response);
                        })
                        .catch(error => {
                            console.log(error);
                            reject(error);
                        });
                });
            },

            register() {
                return new Promise((resolve, reject) => {
                    axios
                        .post("http://7a1d673b.ngrok.io/register", {
                            fullname: this.user.fullname,
                            email: this.user.email,
                            password: this.user.password
                        })
                        .then(response => {
                            this.isLoggingIn = true;
                            resolve(response);
                        })
                        .catch(error => {
                            reject(error);
                        });
                });
            },

            forgotPassword() {
                prompt({
                    title: "Forgot Password",
                    message: "Enter the email address you used to register for GEOQUIZZ to reset your password.",
                    inputType: "email",
                    defaultText: "",
                    okButtonText: "Ok",
                    cancelButtonText: "Cancel"
                }).then(data => {
                    if (data.result) {
                        this.$backendService
                            .resetPassword(data.text.trim())
                            .then(() => {
                                this.alert(
                                    "Your password was successfully reset. Please check your email for instructions on choosing a new password."
                                );
                            })
                            .catch(() => {
                                this.alert(
                                    "Unfortunately, an error occurred resetting your password."
                                );
                            });
                    }
                });
            },

            focusPassword() {
                this.$refs.password.nativeView.focus();
            },
            focusConfirmPassword() {
                if (!this.isLoggingIn) {
                    this.$refs.confirmPassword.nativeView.focus();
                }
            },

            alert(message) {
                return alert({
                    title: GEOQUIZZ,
                    okButtonText: "OK",
                    message: message
                });
            }
        }
    };
</script>

<style scoped>
    .page {
        align-items: center;
        flex-direction: column;
    }

    .form {
        margin-left: 30;
        margin-right: 30;
        flex-grow: 2;
        vertical-align: middle;
    }

    .logo {
        margin-bottom: 12;
        height: 90;
        font-weight: bold;
    }

    .header {
        horizontal-align: center;
        font-size: 25;
        font-weight: 600;
        margin-bottom: 70;
        text-align: center;
        color: #D51A1A;
    }

    .input-field {
        margin-bottom: 25;
    }

    .input {
        font-size: 18;
        placeholder-color: #A8A8A8;
    }

    .input:disabled {
        background-color: white;
        opacity: 0.5;
    }

    .btn-primary {
        margin: 30 5 15 5;
    }

    .login-label {
        horizontal-align: center;
        color: #A8A8A8;
        font-size: 16;
    }

    .sign-up-label {
        margin-bottom: 20;
    }

    .bold {
        color: #000000;
    }
</style>