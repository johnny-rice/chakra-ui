import { Button, Center, HStack, Steps } from "@chakra-ui/react"

export const StepsWithLines = () => {
  return (
    <Steps.Root defaultStep={1} count={steps.length}>
      <Steps.List gap="4">
        {steps.map((item, index) => (
          <Steps.Item
            flex="1!"
            flexDir="column"
            alignItems="flex-start"
            index={index}
            key={index}
            gap="2"
          >
            <Steps.Separator h="3px" flex="unset" display="initial!" mx="0!" />
            <Steps.Trigger>
              <Steps.Title>{item.title}</Steps.Title>
            </Steps.Trigger>
          </Steps.Item>
        ))}
      </Steps.List>

      {steps.map((item, index) => (
        <Steps.Content index={index} key={index}>
          <Center minHeight="20" borderWidth="1px">
            {item.title} - {item.description}
          </Center>
        </Steps.Content>
      ))}

      <Steps.Content index={steps.length}>
        <Center minHeight="20" borderWidth="1px">
          Complete - Thank you!
        </Center>
      </Steps.Content>

      <HStack mt="5">
        <Steps.PrevTrigger asChild>
          <Button size="sm" variant="outline">
            Prev
          </Button>
        </Steps.PrevTrigger>

        <Steps.NextTrigger asChild>
          <Button size="sm" variant="outline">
            Next
          </Button>
        </Steps.NextTrigger>
      </HStack>
    </Steps.Root>
  )
}

const steps = [
  { title: "Step One", description: "Contact Info" },
  { title: "Step Two", description: "Date & Time" },
  { title: "Step Three", description: "Select Rooms" },
]
