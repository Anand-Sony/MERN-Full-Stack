const List = () =>{
    const items = ["react", "vue" , "angular" , "Svelte"];
    return (
        <div>
            <p>Popular courses name :</p>
            <ul>
{/*             <li>{items[0]}</li>
                <li>{items[1]}</li>
                <li>{items[2]}</li>
                <li>{items[3]}</li>
                this is not right method if you have 1000 items or more.So we use "map" */}

                {items.map((item , index)=>(
                    <li key={index} >{item}</li>
                ))}
            </ul>
        </div>
    );
};
export default List;