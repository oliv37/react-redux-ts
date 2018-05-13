import * as React from "react";
import { Unsubscribe } from "redux";
import { connect } from "react-redux";
import Form from './Form.component';
import CountPanel from './CountPanel.component';
import ListPanel from './ListPanel.component';
import store from '../store';
import { AddItemAction } from '../actions';
import { RootState } from '../reducers';

import {ComponentClass } from 'react-redux';

interface DashboardProps {
    items: Array<string>;
}

interface ConnectedDashboardProps {}

class Dashboard extends React.Component<DashboardProps, {}> {
    private unsubscribe: Unsubscribe;

    addItem = (value: string) => {
        store.dispatch({...new AddItemAction(value)});
    }

    render() {
        return (
            <React.Fragment>
                <header>
                    <Form onSubmit={this.addItem} />
                    <CountPanel value={this.props.items.length} />
                </header>

                <main>
                    <ListPanel items={this.props.items} />
                </main>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state: RootState): DashboardProps => ({
    items: state.items
});

const ConnectedDashboard: ComponentClass<ConnectedDashboardProps> =
    connect<DashboardProps, {}, ConnectedDashboardProps, RootState>(mapStateToProps)(Dashboard);

export default ConnectedDashboard;
