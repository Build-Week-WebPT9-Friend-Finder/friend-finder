import React from "react";
import Card, {
  CardImage,
  CardContent,
  CardHeader,
  CardMeta,
  CardDescription,
  CardExtra,
  CardAvatar,
} from "../component/UI/Card";
import Cards from "../component/UI/Cards";

const CardsDemo = () => (
  <div style={{ marginLeft: "4rem", marginTop: "4rem" }}>
    <Card>
      <CardImage img="https://picsum.photos/290/" />
      <CardContent>
        <CardHeader Elem="h2">Hello</CardHeader>
        <CardMeta>Here since 2019</CardMeta>
        <CardDescription>
          This is a Card component, similar to the one from Semantic
          UI.
        </CardDescription>
      </CardContent>
      <CardExtra>
        <span role="img" aria-label="person">
          &#x1F464;
        </span>{" "}
        15 Friends
      </CardExtra>
    </Card>
    <Card>
      <CardContent>
        <CardAvatar img="https://randomuser.me/api/portraits/thumb/men/75.jpg" />{" "}
        Jimmy
      </CardContent>
      <CardImage img="https://picsum.photos/290/200/" />
      <CardContent>
        <p style={{ float: "right" }}>To the right</p>
        <p style={{ float: "left" }}>To the left</p>
      </CardContent>
      <CardExtra>
        <input
          type="text"
          placeholder="Add Comment..."
          style={{
            borderRadius: "4px",
            margin: "0 auto",
            padding: "0.5rem",
            width: "90%",
          }}
        />
      </CardExtra>
    </Card>
    <p>Here is a row of Cards</p>
    <Cards>
      <Card>
        <CardImage img="https://picsum.photos/290/" />
        <CardContent>
          <CardHeader Elem="h2">Hello</CardHeader>
          <CardMeta>Here since 2019</CardMeta>
          <CardDescription>
            This is a Card component, similar to the one from Semantic
            UI.
          </CardDescription>
        </CardContent>
        <CardExtra>
          <span role="img" aria-label="person">
            &#x1F464;
          </span>{" "}
          15 Friends
        </CardExtra>
      </Card>
      <Card>
        <CardImage img="https://picsum.photos/290/" />
        <CardContent>
          <CardHeader Elem="h2">Hello</CardHeader>
          <CardMeta>Here since 2019</CardMeta>
          <CardDescription>
            This is a Card component, similar to the one from Semantic
            UI.
          </CardDescription>
        </CardContent>
        <CardExtra>
          <span role="img" aria-label="person">
            &#x1F464;
          </span>{" "}
          15 Friends
        </CardExtra>
      </Card>
      <Card>
        <CardImage img="https://picsum.photos/290/" />
        <CardContent>
          <CardHeader Elem="h2">Hello</CardHeader>
          <CardMeta>Here since 2019</CardMeta>
          <CardDescription>
            This is a Card component, similar to the one from Semantic
            UI.
          </CardDescription>
        </CardContent>
        <CardExtra>
          <span role="img" aria-label="person">
            &#x1F464;
          </span>{" "}
          15 Friends
        </CardExtra>
      </Card>
    </Cards>
  </div>
);

export default CardsDemo;
