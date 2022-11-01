import MenuItem from './MenuItem'
import {IconCasa} from "../icons/index"
import {IconHelp} from "../icons/index"
import {IconAdjust} from "../icons/index"

export default function MenuLateral(){
    return (
        <aside>
            <div className='h-20 w-20 bg-gradient-to-r from-indigo-500 to-purple-300 flex flex-col items-center justify-center'>
                Logo
            </div>
            <ul>
                <MenuItem url="/" texto="Home" icone={IconCasa}></MenuItem>
                <MenuItem url="/ajuda" texto="Ajuda" icone={IconHelp}></MenuItem>
                <MenuItem url="/ajuste" texto="Ajuste" icone={IconAdjust}></MenuItem>
            </ul>
        </aside>

    )
}
