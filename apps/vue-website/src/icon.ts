import { FontAwesomeIcon, type FontAwesomeIconProps } from "@fortawesome/vue-fontawesome"
import { faUser } from "@fortawesome/free-regular-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core"
import { type DefineComponent } from "vue"

library.add(faUser)

export const createIcon = (): DefineComponent<FontAwesomeIconProps> => {
    return FontAwesomeIcon
}
