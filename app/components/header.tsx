import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Colors } from '../constants/colors';

export function Profile() {
    return <FontAwesome size={40} style={{ paddingLeft: 15, }} name="user-circle-o" color={Colors.lightBackground}/>;
}

export function SettingsCog() {
    return <FontAwesome size={40} style={{ paddingRight: 15, }} name="cog" color={Colors.lightBackground}/>;
}

