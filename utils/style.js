import { makeStyles } from "@material-ui/core";
const useStyle=makeStyles({
    navbar:{
        backgroundColor:'#203040',
        '& a':{
          color:  '#ffffff',
          marginLeft:10,

        }
    },
    brand:{
fontWeight:'bold',
fontSize:'1.5rem',
    },
    main:{
        minHeight:'80vh'
    },
    foot:{
        textAlign:'center'
    },
    grow:{
        flexGrow:1
    }
})
export default useStyle