export async function main(ns: NS) 
{   
    // initalization
    let res = new Object();
    let loc = "minapi/exec/out.json";
    
    // validation
    if (!ns.fileExists(loc))
        ns.write(loc, "{}", 'w');

    // silence IDE
    ns.ramOverride(2.70); 
    
    // exploit 'n store
    res[ns.args[0]] = ns[ns.args[0]](...ns.args.slice(1));
    ns.write(loc, JSON.stringify(res), 'w');
}
