import React, { Component } from 'react';
import './styles.css';

import { 
    getUserAccounts,
    changeAccountStateWithUsername,
    deleteAccountWithUsername } from './services/services.js';

import ModalController from 'components/ModalController';
import AddAccountForm from './components/AddAccountForm';

const initialState = {
    showAddAccountForm : false,
    accounts : getUserAccounts()
};

class Accounts extends Component{

    constructor(props){
        super(props);

        this.state = initialState;

        this.hideAddAccountForm = this.hideAddAccountForm.bind(this);
        this.openAddAccountForm = this.openAddAccountForm.bind(this);
        this.changeAccountState = this.changeAccountState.bind(this);
        this.showAccountAnalitycs = this.showAccountAnalitycs.bind(this);
        this.deleteAccount = this.deleteAccount.bind(this); 
    }

    hideAddAccountForm(){
        this.setState({ showAddAccountForm : false, });
    }

    openAddAccountForm(){
        this.setState({ showAddAccountForm : true, });
    }

    changeAccountState(accountUsername){
        this.setState( { accounts : changeAccountStateWithUsername(accountUsername), });
    }

    showAccountAnalitycs(accountUsername){

    }

    deleteAccount(accountUsername){
        this.setState( { accounts : deleteAccountWithUsername(accountUsername), });
    }

    render(){

        const {accounts, showAddAccountForm} = this.state;

        console.log(accounts);
        return(
            <div className="accounts">
                
                <div className="accounts-title-container">
                    <p className="accounts-title">Cuentas</p>
                </div>

                <AddAccountSection onClick={() => this.openAddAccountForm()}/>

                <AccountsTable 
                    accounts={accounts}
                    changeAccountState={this.changeAccountState}
                    deleteAccount={this.deleteAccount}
                />

                <ModalController activate={showAddAccountForm} desactivateListener={this.hideAddAccountForm}>
                    <AddAccountForm />
                </ModalController>

            </div>
        );
    }
}

function AddAccountSection(props){
    return(
        <div className="add-account-container">
            <button className="add-account-button" onClick={props.onClick}>
                <i className="fa fa-fw fa-plus" style={{marginRight : 7}}></i>
                Agregar una cuenta
            </button>
        </div>
    );
}

function AccountsTable(props){

    return(
        <div className="accounts-table-container">
        <table className="accounts-table">
            <thead>
            <tr>
                <th className="status-col">Status</th>
                <th className="big-col">Id</th>
                <th className="big-col">Nombre de usuario</th>
                <th className="small-col"># Siguiendo</th>
                <th className="small-col"># de Seguidores</th>
                <th className="small-col"># de post</th>
                <th className="small-col"></th>
            </tr>
            </thead>

            <tbody>
            {props.accounts.map((account, accountIdx) => {
                let status = "";
                let statusStyle = { color: "", fontWeight: 700 };

                if (account.status) {
                status = "• ACTIVA";
                statusStyle.color = "rgb(44, 139, 44)";
                } else {
                status = "• DESACTIVADA";
                statusStyle.color = "rgb(212, 38, 38)";
                }

                return (
                <tr key={accountIdx}>
                    <td className="status-col" style={statusStyle}>
                    {status}
                    </td>
                    <td className="big-col">{account.id}</td>
                    <td className="big-col">{account.username}</td>
                    <td className="small-col">{account.follow}</td>
                    <td className="small-col">{account.followed_by}</td>
                    <td className="small-col">{account.media_count}</td>
                    <td className="small-col">
                    <div className="table-button-container">
                        <button className="table-power-button" onClick={() => props.changeAccountState(account.username)}>
                        <i className="fa fa-fw fa-power-off"></i>
                        </button>
                        <button className="table-analytics-button" onClick={() => props.showAccountAnalitycs(account.username)}>
                        <i className="fa fa-fw fa-chart-line"></i>
                        </button>
                        <button className="table-trash-button" onClick={() => props.deleteAccount(account.username)}>
                        <i className="fa fa-fw fa-trash"></i>
                        </button>
                    </div>
                    </td>
                </tr>
                );
            })}
            </tbody>
        </table>
        </div>
    );
}

export default Accounts;