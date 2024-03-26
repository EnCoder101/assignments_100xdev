import { Admin } from "@repo/ui/admin";
import { Button } from "@repo/ui/button";
import { InputBox } from "@repo/ui/input-box";

export default function Page(): JSX.Element {
    return (
        <main>
            <Admin />
            <Button appName="test" >test</Button>
            <InputBox />
        </main>
    );
}
