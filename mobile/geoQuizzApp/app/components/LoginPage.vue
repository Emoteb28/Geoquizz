<template>
	<Page>
		<FlexboxLayout class="page" >
			<StackLayout class="form">
				<Image class="logo" src="~/images/logo.png" />
				<Label class="header" text="GeoQuizzApp" />

				<StackLayout class="input-field" marginBottom="25">
					<TextField class="input" hint="Email" keyboardType="email" autocorrect="false" autocapitalizationType="none" v-model="user.email"
					 returnKeyType="next" @returnPress="focusPassword" fontSize="18" />
					<StackLayout class="hr-light" />
				</StackLayout>

				<StackLayout class="input-field" marginBottom="25">
					<TextField ref="password" class="input" hint="Password" secure="true" v-model="user.password" :returnKeyType="isLoggingIn ? 'done' : 'next'"
					 @returnPress="focusConfirmPassword" fontSize="18" />
					<StackLayout class="hr-light" />
				</StackLayout>

				<StackLayout v-show="!isLoggingIn" class="input-field">
					<TextField ref="confirmPassword" class="input" hint="Confirm password" secure="true" v-model="user.confirmPassword" returnKeyType="done"
					 fontSize="18" />
					<StackLayout class="hr-light" />
				</StackLayout>

				<Button :text="isLoggingIn ? 'Sign In' : 'Sign Up'" @tap="" class="btn btn-primary m-t-20" />
				<Label v-show="isLoggingIn" text="Mot de passe perdu?" class="login-label" @tap="forgotPassword" />
			</StackLayout>

			<Label class="login-label sign-up-label" @tap="toggleForm">
	          <FormattedString>
	            <Span :text="isLoggingIn ? 'Pas de compte? ' : 'Back to Login'" />
	            <Span :text="isLoggingIn ? 'Inscription' : ''" class="bold" />
	          </FormattedString>
	        </Label>
		</FlexboxLayout>
	</Page>
</template>

<script>
// A stub for a service that authenticates users.



import Home from './Home.vue'
export default {
    data() {
        return {
            Homes : Home,
            isLoggingIn: true,
            user: {
                email: "",
                password: "",
                confirmPassword: ""
            }
        };
    },
    methods: {
        toggleForm() {
            this.isLoggingIn = !this.isLoggingIn;
        },


    }
};
</script>

<style scoped>
	.page {
		align-items: center;
		flex-direction: column;
        background-color:aliceblue;
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
		color: #deepskyblue;
	}

	.input-field {
		margin-bottom: 25;
	}

	.input {
		font-size: 18;
		placeholder-color: #A8A8A8;
	}

	.input-field .input {
		font-size: 54;
	}

	.btn-primary {
		height: 50;
		margin: 30 5 15 5;
		background-color: deepskyblue;
		border-radius: 5;
		font-size: 20;
		font-weight: 600;
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
