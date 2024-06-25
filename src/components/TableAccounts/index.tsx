import { Table, Progress, Anchor, Text, Group } from "@mantine/core";
import classes from "./TableAccounts.module.css";

type TableAccounts = Array<{
  account: string;
  amount: number;
  dueIn: string;
  paidIn: string;
  commitment: { positive: number; negative: number };
}>;

export function TableAccounts({ data }: any) {
  const rows = data.map((row: any) => {
    const totalcommitment = row.commitment.negative + row.commitment.positive;
    const positivecommitment =
      (row.commitment.positive / totalcommitment) * 100;
    const negativecommitment =
      (row.commitment.negative / totalcommitment) * 100;

    return (
      <Table.Tr key={row.account}>
        <Table.Td>{row.account}</Table.Td>
        <Table.Td>{"R$ " + Intl.NumberFormat().format(row.amount)}</Table.Td>
        <Table.Td>{row.dueIn}</Table.Td>
        <Table.Td>{row.paidIn}</Table.Td>
        <Table.Td>
          <Group justify="space-between">
          <Text fz="xs" c="red" fw={700}>
              {negativecommitment.toFixed(0)}%
            </Text>
            <Text fz="xs" c="teal" fw={700}>
              {positivecommitment.toFixed(0)}%
            </Text>
          </Group>
          <Progress.Root>
            <Progress.Section
              className={classes.progressSection}
              value={negativecommitment}
              color="red"
            />
            <Progress.Section
              className={classes.progressSection}
              value={positivecommitment}
              color="teal"
            />
          </Progress.Root>
        </Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Table.ScrollContainer minWidth={400} pb={50} pt={50} className={classes.table}>
      <Table verticalSpacing="xs">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Conta</Table.Th>
            <Table.Th>Valor</Table.Th>
            <Table.Th>Vence em</Table.Th>
            <Table.Th>Pago em</Table.Th>
            <Table.Th>Comprometimento da renda</Table.Th>
            <Table.Th>Descrição</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
