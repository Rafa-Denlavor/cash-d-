import { TableAccounts } from "@/components/TableAccounts";
import React from "react";

export default function Financial() {
  return (
    <section>
      <header><h1>Financeiro</h1>
      </header>
      <TableAccounts
        data={[
          {
            account: "Foundation",
            amount: "300.9",
            dueIn: "10/20/2020",
            paidIn: "01/20/2020",
            commitment: { positive: 2223, negative: 259 },
          },
        ]}
      />
    </section>
  );
}
