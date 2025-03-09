export class API
{
    // standard output
    #out = "bpsuite/exec/out.json";

    // supported api's
    #ns = "bpsuite/exec/nsapi.ts";
    #hn = "bpsuite/exec/hnapi.ts";

    // only (required) api for file operations
    #_; constructor (ns: NS) { this.#_ = ns; }

    async call<T>(id: string, ...params: any[])
    {
        // categorize
        let api = (true as (T extends NS ? true : false))       ? this.#ns 
                : (true as (T extends Hacknet ? true : false))  ? this.#hn
                : this.#ns;

        // execute
        this.#_.exec(api, "home", 
            1, id, ...params);
        await this.#_.sleep(8);
        
        // capture
        let stdout = JSON.parse(
            this.#_.read(this.#out))[id];
        await this.#_.sleep(8);

        // reset
        this.#_.write(this.#out, "{}", 'w');
        return stdout;
    }
}
