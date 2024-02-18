
const RSS= "Com"
const parseEnv = () => {
    const envVariables = process.env;
    const envArr =Object.keys(envVariables)
const envWithPrefixArr= envArr.filter(item=>item.startsWith(RSS))
    .reduce((acc, key) => {
        acc[key] = envVariables[key];
        return acc;
    }, {});
    const envWithPrefixArrRSS = Object.keys(envWithPrefixArr)
    .map((item, index)=>`${RSS}${item}=${envWithPrefixArr[item]}`)
        .join(', ')
    console.log(envWithPrefixArrRSS)
};

parseEnv();
