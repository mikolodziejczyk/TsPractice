
export class MyApp {


    initialize() {

    }


    delay(milliseconds: number, count: number): Promise<number> {
        return new Promise<number>(
            (resolve, reject) => {
                setTimeout(() => {
                    let isSuccess: boolean = (new Date).getTime() % 2 == 0;
                    if (isSuccess) resolve(count); else reject();
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
        let input = parseInt(jQuery("#myData").val());
        let p = this.getByJson(input);
        p.done((v) => { console.log(`Success: ${v}`); });
        p.fail((v) => { console.log(`Failure: ${v}`); });
    }



}


jQuery(document).ready(() => {
    let myApp = new MyApp();
    window["myApp"] = myApp;
    myApp.initialize();
    jQuery("#start").click(myApp.testJson);
});

