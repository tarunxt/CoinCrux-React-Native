import React from "react";
import { ActivityIndicator } from "react-native-paper";
import { LoaderView } from "./styles/global.styles";

export const Loader = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <LoaderView>
          <ActivityIndicator
            size={50}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{ marginLeft: -25 }}
            color="#4941F2"
            animating={true}
          />
        </LoaderView>
      )}
    </>
  );
};
