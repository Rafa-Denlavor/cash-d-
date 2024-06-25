import { Group, Paper, Text, ThemeIcon, SimpleGrid } from "@mantine/core";
import { IconArrowUpRight, IconArrowDownRight } from "@tabler/icons-react";
import classes from "./StatsGrid.module.css";

const data = [
  { title: "Saldo atual", value: 13.456, diff: 34 },
  { title: "Receitas", value: 4.145, diff: 1 },
  { title: "Despesas gerais", value: 0, diff: 18 },
];

export function StatsGrid() {
  const stats = data.map((stat) => {
    const DiffIcon = stat.diff > 0 ? IconArrowUpRight : IconArrowDownRight;

    return (
      <Paper withBorder p="md" radius="md" key={stat.title}>
        <Group justify="apart">
          <div>
            <Text
              c="dimmed"
              tt="uppercase"
              fw={700}
              fz="xs"
              className={classes.label}
            >
              {stat.title}
            </Text>
            <Text fw={700} fz="xl">
              R$ {stat.value}
            </Text>
          </div>
          <ThemeIcon
            color="gray"
            variant="light"
            style={{
              color:
                stat.title !== 'Despesas gerais' && stat.value > 0
                  ? "var(--mantine-color-teal-6)"
                  : "var(--mantine-color-red-6)",
            }}
            size={38}
            radius="md"
          >
            <DiffIcon size="1.8rem" stroke={1.5} />
          </ThemeIcon>
        </Group>
        <Text c="dimmed" fz="sm" mt="md">
          <Text component="span" c={stat.title !== 'Despesas gerais' && stat.diff > 0 ? "teal" : "red"} fw={700}>
            {stat.diff}%
          </Text>{" "}
          {stat.title !== 'Despesas gerais' && stat.diff > 0 ? "increase" : "decrease"} compared to last month
        </Text>
      </Paper>
    );
  });

  return (
    <div className={classes.root}>
      <SimpleGrid cols={{ base: 1, md: 3 }}>{stats}</SimpleGrid>
    </div>
  );
}
