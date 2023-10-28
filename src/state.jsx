
import { Stack, Text, Button, Group, TextInput } from "@mantine/core";

import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { changeUserName } from "./redux/userSlice";

const State = () => {

  const { userName, password } = useSelector((state) => state.userSlice);

  console.log("userName, password: ", userName, password);

  const dispatch = useDispatch();

  const [count, setCount] = useState(10);

  const handleClick = () => {

    setCount((prevoiusValue) => prevoiusValue + 5);

    setCount((prevoiusValue) => prevoiusValue - 1);

    setCount((prevoiusValue) => prevoiusValue - 3);

  };

  return (

    <Stack>

      <Group>

        <Text size="h1">UserName</Text>

        <TextInput

          onChange={(e) =>

            dispatch(changeUserName({ username: e.target.value }))

          }

        />

      </Group>

      <Group>

        <Text size="h1">Password</Text>

        <TextInput

          onChange={(e) =>

            dispatch(changePassword({ password: e.target.value }))

          }

          classNames={{}}

          styles={{
            
            input: {},
      

          }}

        />

      </Group>

      <Button onClick={handleClick}>Click</Button>

    </Stack>

  );

};

export default State;

