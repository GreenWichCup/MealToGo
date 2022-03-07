import React from "react";
import {
  AccountBackground,
  AccountContainer,
  AuthButton,
  AccountCover,
  LogoContainer,
  Logo,
} from "../components/account-styles";
import { Spacer } from "../../../components/spacer/spacer.component";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <AccountContainer>
        <AuthButton
          icon="account-arrow-right"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <Spacer size="large" />
        <AuthButton
          icon="account-details"
          mode="contained"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};
