import React, { Component } from 'react';

import StockInfo from '../../components/profile/StockInfo';


class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            error: null,
            results: [],
        };

        this.fetchProfileStockinfo = this.fetchProfileStockinfo.bind(this);
    }

    componentWillMount() {
        this.fetchProfileStockinfo();
    }

    componentDidUpdate(){
        console.log( this.state.isLoading)
    }

    fetchProfileStockinfo() {
        console.log('fetchProfileStockinfo');

        fetch('/api/ordenes/add', { method: 'GET' })
            .then(res => res.json())
            .then(json => {
                if (json.length > 0) {
                    this.setState({
                        isLoading: false,
                        results: json,
                    })
                } else {
                    this.setState({
                        isLoading: false,
                        error: 'error en Profile',

                    })
                }
            });

    }

    render() {
        const {
            error,
            isLoading,
            results,
        } = this.state;

        if (isLoading) {
            return ( <div ><p> Loading... </p></div >
            )
        }
        if (error) {
            return (<div style = {{ backgroundColor: '#610B21' }}>
                <p style = {{ color: '#ff0000' }} > { error } </p></div >
            )
        }

        return ( <div><StockInfo data={results} /></div> 
        );
    }
}
export default Profile;