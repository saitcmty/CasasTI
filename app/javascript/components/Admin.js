import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AdminButton from './Admin/AdminButton';

class Admin extends Component {
    render() {
        return (
            <div>
               <h1 className="main-title">BIENVENIDO {this.props.userName}!! TOP SECRET</h1>

                <section id="admin-actions" className="row">
                    <AdminButton 
                        buttonID="houses"
                        buttonRedirect="/houses"
                        buttonText="CASAS"
                    />

                    <AdminButton 
                        buttonID="students"
                        buttonRedirect="/students"
                        buttonText="ESTUDIANTES"
                    />

                    <AdminButton 
                        buttonID="events"
                        buttonRedirect="/houses"
                        buttonText="EVENTOS"
                    />

                    <AdminButton 
                        buttonID="registrations"
                        buttonRedirect="/houses"
                        buttonText="REGISTROS"
                    />

                    <AdminButton 
                        buttonID="evidences"
                        buttonRedirect="/houses"
                        buttonText="EVIDENCIAS"
                    />

                </section> 
            </div>
        );
    }
}

Admin.propTypes = {
    userName: PropTypes.string.isRequired
};

export default Admin;