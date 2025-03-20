
const Cmp=(props:any)=>{
    return (
        <>
            <h3 className='italic text-left'>{props.title}</h3>
            <>
                {props.content}
            </>
        </>
    );
}

export default Cmp;