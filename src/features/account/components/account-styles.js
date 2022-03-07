import styled from "styled-components";
import { Button, TextInput } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import { Text } from "../../../components/typography/text.component";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/account_photo_bg.jpg"),
})`
  flex: 1;
  background-color: #ddd;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.2);
  padding: ${(props) => props.theme.space[4]};
  width: 90%;
`;

export const LogoContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 20%;
  align-items: center;
  z-index: 5628;
  margin: ${(props) => props.theme.space[2]};
`;

export const Logo = styled.Image.attrs({
  source: require("../../../../assets/app_title.png"),
})`
  transform: scale(0.5);
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const AuthInput = styled(TextInput)`
  margin-top: ${(props) => props.theme.space[1]};
  width: 100%;
`;

export const Title = styled(Text)`
  font-size: 30px;
`;
export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 30px;
  padding: ${(props) => props.theme.space[2]};
`;
