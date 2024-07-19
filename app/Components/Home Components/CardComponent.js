import * as React from "react";
import { Card, Text } from "react-native-paper";

const CardComponent = ({ title, image, description }) => (
  <Card className="mb-12 p-2">
    <Card.Title
      title={title}
      titleStyle={{ color: "green", textAlign: "center" }}
    />
    <Card.Cover source={{ uri: image }} />
    <Card.Content>
      <Text variant="bodyMedium" className="text-center bg-red-100 ">
        
        {description}
      </Text>
    </Card.Content>
  </Card>
);

export default CardComponent;
