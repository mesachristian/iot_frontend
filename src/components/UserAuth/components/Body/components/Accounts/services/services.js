var accounts = [
    {
        id : 12342373647328,
        username : 'Juan_Reyes',
        followed_by : 300,
        follow : 250,
        media_count : 30,
        status : true
    },
    {
        id : 12342373647328,
        username : 'CristobalColon1492',
        followed_by : 1000,
        follow : 2500,
        media_count : 12,
        status : false
    },
    {
        id : 12342373647328,
        username : 'Katrina_Caliente',
        followed_by : 30000,
        follow : 399,
        media_count : 165,
        status : true
    }
];

export function getUserAccounts(){
    return accounts;
}

export function changeAccountStateWithUsername(username){
    console.log(username);
    accounts = accounts.map( (account) => {
        if(account.username === username){
            account.status = !account.status;
            console.log(account);
        }
        return account;
    });

    return accounts;
}

export function deleteAccountWithUsername(username){
    accounts = accounts.filter( (element) => {
        return element.username !== username;
    });
    return accounts;
}