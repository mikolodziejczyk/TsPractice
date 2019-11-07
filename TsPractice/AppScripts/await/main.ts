
export class MyApp {


    initialize(): void {
        // to be filled
    }


    delay(milliseconds: number, count: number): Promise<number> {
        return new Promise<number>(
            (resolve, reject) => {
                setTimeout(() => {
                    let isSuccess: boolean = (new Date).getTime() % 2 === 0;
                    if (isSuccess) { resolve(count); } else { reject(); }
                }, milliseconds);
            }
        );
    }

    getByJson(val: number): JQueryPromise<string> {
        return $.ajax({
            url: "GetValueJson",
            type: "POST",
            contentType: "application/json;charset=utf8",
            dataType: "json",
            data: JSON.stringify({ id: val })
        });
    }

    testJson = (): void => {
        let input: number = parseInt(jQuery("#myData").val(), 10);
        let p: JQueryPromise<string> = this.getByJson(input);
        p.done((v) => { console.log(`Success: ${v}`); });
        p.fail((v) => { console.log(`Failure: ${v}`); });
    }
}


jQuery(document).ready(() => {
    let myApp: MyApp = new MyApp();
    // tslint:disable-next-line:no-string-literal
    window["myApp"] = myApp;
    myApp.initialize();
    jQuery("#start").click(myApp.testJson);
});

