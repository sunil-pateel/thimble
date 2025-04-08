import FontAwesome from '@expo/vector-icons/FontAwesome';

export function Profile() {
    return <FontAwesome size={40} style={{ paddingLeft: 15, }} name="user-circle-o" />;
}

export function SettingsCog() {
    return <FontAwesome size={40} style={{ paddingRight: 15, }} name="cog" />;
}
