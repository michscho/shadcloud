import { Command } from "commander";
import { add } from "./src/commands/add.ts";
import { init } from "./src/commands/init.ts";

async function main() {
  const program = new Command();

  program
    .name("shadcloud")
    .description("CLI to build your Cloud modules")
    .version("0.0.1");

  program.addCommand(init).addCommand(add);

  program.parse();
}

main();
