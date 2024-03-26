import { Admin } from "@repo/ui/admin";
import styles from "./page.module.css";
import { Button } from "@repo/ui/button";


export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <Admin />
      <Button appName="web" className={styles.button}>
        Click me!
      </Button>
    </main>
  );
}
