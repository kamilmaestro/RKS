import React from "react";
import {
    CloseButton,
    DrawerContent,
    DrawerInfo,
    DrawerTop,
    ExternalLinkContainer,
    LinkText,
    SpecialLinkContainer,
    SpecialLinkSubtext,
    SpecialLinkText,
    SpecialStyledLink,
    StyledDrawer,
    StyledLink
} from "./Drawer.styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClipboardList, faEnvelope, faExternalLinkAlt, faHome, faUser} from "@fortawesome/free-solid-svg-icons";
import './Drawer.styles.css';
import {connect} from "react-redux";
import {manageDrawer} from "../../actions/drawerActions";

const Drawer = ({drawerIsOpen, manageDrawer}) => {

    return (drawerIsOpen && <StyledDrawer className={drawerIsOpen === true ? 'slider-in' : drawerIsOpen === false ? 'slider-out' : ''}>
        <DrawerTop>
            <CloseButton onClick={() => manageDrawer(false)} title={'Zamknij'}/>
        </DrawerTop>
        <DrawerContent>
            <StyledLink to={'/'} onClick={() => manageDrawer(false)} style={{marginTop: 15}}>
                <FontAwesomeIcon
                    icon={faHome}
                    color={'grey'}
                    style={{width: 25, height: 25, marginLeft: 10}}
                />
                <LinkText>{'Start'}</LinkText>
            </StyledLink>
            <StyledLink to={'/competitions'} onClick={() => manageDrawer(false)}>
                <FontAwesomeIcon
                    icon={faClipboardList}
                    color={'grey'}
                    style={{width: 25, height: 25, marginLeft: 10}}
                />
                <LinkText>{'Rozgrywki'}</LinkText>
            </StyledLink>
            <StyledLink to={'/squad'} onClick={() => manageDrawer(false)}>
                <FontAwesomeIcon
                    icon={faUser}
                    color={'grey'}
                    style={{width: 25, height: 25, marginLeft: 10}}
                />
                <LinkText>{'Kadra'}</LinkText>
            </StyledLink>
            <StyledLink to={'/contact'} onClick={() => manageDrawer(false)}>
                <FontAwesomeIcon
                    icon={faEnvelope}
                    color={'grey'}
                    style={{width: 25, height: 25, marginLeft: 10}}
                />
                <LinkText>{'Kontakt'}</LinkText>
            </StyledLink>
        </DrawerContent>
    </StyledDrawer>
    );
};


const mapStateToProps = ({drawerReducer}) => (drawerReducer);
const mapDispatchToProps = {manageDrawer};

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
