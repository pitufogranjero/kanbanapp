import { v4 as uuidv4} from 'uuid'

const mockData = [
    {
        id:uuidv4(),
        title:"📋 Todo",
        tasks:[
            {
                id:uuidv4(),
                title:'Learn Python',
                
            },
            {
                id:uuidv4(),
                title:'Learn DataScience',
                
            }
        ]
    },
    {
        id:uuidv4(),
        title:"⏱️ Doing",
        tasks:[
            {
                id:uuidv4(),
                title:'Learn Databases',
                
            },
            {
                id:uuidv4(),
                title:'Learn CSS',
                
            }
        ]
    },
    {
        id:uuidv4(),
        title:"✅ Done",
        tasks:[
            {
                id:uuidv4(),
                title:'Learn javascript',
                
            },
            {
                id:uuidv4(),
                title:'Learn HTML',
                
            }
        ]
    }

]

export default mockData