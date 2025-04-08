import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import { Colors } from "../constants/colors"
export default function SewingNeedleIcon({color}: {color: string}) {
    return (
  <Svg
    width={28}
    height={28}
    fill="none"
    viewBox="0 0 22 21"
  >
    <Path
      fill={color}
      d="M20.037 5.282a11.852 11.852 0 0 0 .854-1.033 10.227 10.227 0 0 0 .177-.253l.074-.112a7.456 7.456 0 0 0 .283-.468c.02-.039.042-.076.062-.114a5.798 5.798 0 0 0 .24-.515l.035-.087.04-.107.03-.088a3.878 3.878 0 0 0 .07-.24c.01-.032.018-.072.025-.104.01-.045.02-.14.028-.14.12-.692.006-1.203-.397-1.596-1.159-1.132-3.709.122-5.802 2.309.548.15 1.196.367 1.86.667 1.176-1.042 2.166-1.67 2.38-1.46.054.053.094.154-.007.292 0 .1-.075.218-.153.354h.007c-.052.089-.11.185-.178.288l-.004.007a7.718 7.718 0 0 1-.229.32l-.007.01c-.041.054-.084.11-.13.167l-.012.016a13.283 13.283 0 0 1-.584.687c-.035.04-.07.079-.107.118l-.074.08-.026.028a9.382 9.382 0 0 0-.769-.419l-.107-.05-.103-.049-.109-.049-.1-.045a10.262 10.262 0 0 0-.52-.21 11.241 11.241 0 0 0-.107-.04l-.095-.035-.129-.045-.07-.024a11.693 11.693 0 0 0-.192-.064l-.072-.022a13.334 13.334 0 0 0-.123-.038c-.026-.008-.05-.016-.077-.023a16.971 16.971 0 0 0-.303-.086l-.069-.019-.117-.03-.059-.015a16.662 16.662 0 0 0-.13-.032l-.04-.01a13.293 13.293 0 0 0-.525-.113A16.111 16.111 0 0 0 8.52 2.87a5.505 5.505 0 0 0-1.9-1.65C4.679.192 2.397.351.563.48a.597.597 0 0 0-.561.633.6.6 0 0 0 .647.548c1.764-.123 3.763-.263 5.392.601.422.224.836.54 1.187.923-.346.101-.686.216-1.016.343-1.234.474-4.062 1.816-3.682 4.04.102.594.433 1.09.958 1.435.712.468 1.789.635 2.743.426 1.696-.371 2.964-1.756 3.155-3.445a4.267 4.267 0 0 0-.273-2.017 14.861 14.861 0 0 1 4.55-.049l.04.006c.093.013.187.029.28.044l.076.012.236.044.119.022.156.032.194.041c.114.026.226.053.335.08l.117.03.202.054.187.055.117.035.222.07.07.023c.081.028.162.056.24.085l.037.013c.085.032.167.063.248.096l.018.006c.084.034.165.068.245.103l.01.004c.079.034.157.07.233.105.207.097.401.197.583.3-.042.041-.085.084-.128.123l-.095.088c-.074.069-.149.144-.223.21-.182.164-.362.27-.534.468-.974.79-1.757 1.25-1.944 1.067-.207-.202.383-1.125 1.381-2.22a11.68 11.68 0 0 0-1.723-.475C12.437 7.152 5.149 15.09.612 20.385c-.137.16-.138.382-.001.515.136.133.364.133.527 0C6.59 16.438 14.62 9.368 17.51 7.426a15.259 15.259 0 0 0 .984-.721l.004-.004.012-.009.14-.113.105-.087c.068-.056.134-.112.2-.169l.093-.081c.586.583.91 1.158 1.088 1.59.316.766.846 2.83-1.048 5.436-2.17 2.986-5.577 4.475-11.048 4.83a.597.597 0 0 0-.564.63.6.6 0 0 0 .644.551c3.643-.236 8.845-1.044 11.956-5.325 1.578-2.17 2.01-4.564 1.184-6.565a5.98 5.98 0 0 0-1.342-1.98l.024-.025.095-.102Zm-11.855.572c-.134 1.186-1.025 2.158-2.215 2.42-.626.136-1.367.032-1.802-.254a.936.936 0 0 1-.44-.647c-.125-.734.58-1.84 2.93-2.743.408-.156.83-.292 1.263-.406.222.495.33 1.047.264 1.63Z"
    />
  </Svg>
    );
}
