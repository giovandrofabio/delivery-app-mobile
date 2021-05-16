import React, { useState } from 'react';
import { Appbar, Menu } from 'react-native-paper';
import { headerStyle } from './header.style';

interface HeaderComponentParams {
    hasBackButton? : boolean;
    navigation?: any;
    title: string;
}

export const HeaderComponent = (props: HeaderComponentParams) => {

    const [visible, setVisible] = useState(false);

    const goBack = () => props.navigation?.goBack();
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    const goToMyDeliveries = () => {
        props.navigation?.navigate("Deliveries")
        closeMenu();
    }
    const logout = () => {
        props.navigation?.navigate("Login")
        closeMenu();
    }

    return (
        <Appbar>
            {
                props.hasBackButton ?
                <Appbar.BackAction
                    onPress={goBack}/>
                :
                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={
                        <Appbar.Action
                            icon="menu"
                            color={headerStyle.menu.color}
                            onPress={openMenu}/>
                    }>
                    <Menu.Item
                        title="My deliveries"
                        onPress={goToMyDeliveries}/>
                    <Menu.Item
                        title="Logout"
                        onPress={logout}/>
                </Menu>
            }
            <Appbar.Content
                title={props.title} />
        </Appbar>
    )

}