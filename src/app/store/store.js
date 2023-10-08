import {create} from 'zustand'

const useUtilities = create (
    (set , get) => ({
        openSidebar:false,
        setOpenSidebar: ()=>{
            set((state)=>{
                return {
                    ...state,
                    openSidebar: !state.openSidebar
                }
            })
        },
        openModalRegisterCustomer:false,
        setModalRegisterCustomer: ()=>{
            set((state)=>{
                return {
                    ...state,
                    openModalRegisterCustomer: !state.openModalRegisterCustomer
                }
            })
        },
        openModalAddHome:false,
        setModalAddHome: ()=>{
            set((state)=>{
                return {
                    ...state,
                    openModalAddHome: !state.openModalAddHome
                }
            })
        },
        openNotExitsItem:false,
        setNotExitsItem:() => {
            set((state)=>{
                return {
                    ...state,
                    openNotExitsItem: !state.openNotExitsItem
                }
            })
        },
        openExitsItem:false,
        setExitsItem:() => {
            set((state)=>{
                return {
                    ...state,
                    openExitsItem: !state.openExitsItem
                }
            })
        },
        bearToken: '',
        updateBearToken: value => set(state => ({...state, bearToken: value})),
        urlDeploy: 'https://realestatepro.pythonanywhere.com',
    })
)



export default useUtilities;