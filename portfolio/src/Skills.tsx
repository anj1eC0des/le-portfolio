import { Avatar, AvatarImage } from './components/ui/avatar'
import { AvatarFallback } from './components/ui/avatar'
const Skills=(props:any)=>{
    return(
        <>
        {props.array.forEach((element:any) => {
            return(
                <Avatar>
                    <AvatarImage src={`.assets/${element}.svg`}/>
                    <AvatarFallback>{element}</AvatarFallback>
                </Avatar>
            );

        })
        }
        </>
    );
}
export default Skills;