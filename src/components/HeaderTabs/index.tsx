import { Container, Group, Tabs, Burger, Anchor } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconLogout } from "@tabler/icons-react";
import classes from "./HeaderTabs.module.css";
import { ActionToggle } from "../ActionToogle";

const tabs = [
  { label: "Dashboard", path: "/" },
  { label: "Financeiro", path: "/financeiro" },
];

export function HeaderTabs() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = tabs.map(({ label, path }) => {
    return (
      <Tabs.Tab value={label} key={label}>
        <a href={path}>
          {label}
        </a>
      </Tabs.Tab>
    );
  });

  return (
    <div className={classes.header}>
      <Container className={classes.mainSection} size="md">
        <Group justify="space-between">
          <p style={{ fontWeight: "bold" }}>CASH D+</p>
          <ActionToggle />
          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        </Group>
      </Container>
      <Container size="md">
        <Tabs
          defaultValue="Dashboard"
          variant="outline"
          visibleFrom="sm"
          classNames={{
            root: classes.tabs,
            list: classes.tabsList,
            tab: classes.tab,
          }}
          onChange={(e) => console.log(e)}
        >
          <Tabs.List>{items}</Tabs.List>
        </Tabs>
      </Container>
    </div>
  );
}
