export async function main(ns: NS) 
{
    // variables (statically defined)
    let root = "https://raw.githubusercontent.com/"
    + "damariion/bit-utils/refs/heads/main/";
    
    // download definition
    await ns.wget(ns.args[0], "mod.txt", "home");

    for (let entry of ns.read("mod.txt").split('\n'))
    {
        // ignore whitespaces
        if (entry == '')
            continue;
        
        // download entries
        let path = entry.replace(root, '/');
        await ns.wget(entry, path, "home");
        
        // report
        ns.tprint(path);
    }

    // cleanup
    await ns.rm("mod.txt", "home");
}