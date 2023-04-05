import * as React from 'react';
import {useState} from 'react';
import {
    AppLayout,
    BrandList,
    CategoryDialog,
    CategoryList,
    CreditLimit,
    CreditUsage,
    ProductList,
    UserList
} from "../../components";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import {Chip, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {CategoryCreateDto, SignInResponseDto} from "../../models";
import {CATEGORY_DIALOG_MODES, USER_ROLE_IDS} from "../../constants";
import {categoryActions, creditInfoActions, userActions} from "../../redux/actions";
import Avatar from "@mui/material/Avatar";
import {amber} from "@mui/material/colors";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import formValidator from "../../utils/formValidator";

const INITIAL_CREDIT_INFO_CHART_DATA = [{
    name: 'Used Credits',
    data: [0]
},
    {
        name: 'Available Credits',
        data: [0]
    }]

const INITIAL_CATEGORY_FORM_DATA = {
    categoryId: {value: 0, validator: 'number', isRequired: false, disabled: false, error: null},
    categoryName: {value: '', validator: 'text', isRequired: true, disabled: false, error: null},
    categoryNote: {value: '', validator: 'text', isRequired: true, disabled: false, error: null},
    categoryStatus: {value: true, validator: 'boolean', isRequired: true, disabled: false, error: null},
}
const Dashboard = () => {
    const dispatch = useDispatch()

    const [open, setOpen] = React.useState(false);
    const [categoryDialogOpen, setCategoryDialogOpen] = React.useState(false);
    const [categoryDialogMod, setCategoryDialogMod] = React.useState(null);
    const [categoryFormData, setCategoryFormData] = React.useState(INITIAL_CATEGORY_FORM_DATA);
    const [creditUsageChartData, setCreditUsageChartData] = useState(INITIAL_CREDIT_INFO_CHART_DATA)

    const authenticateUser = useSelector((state: any) => state.auth.authenticateUser )
    const userCreditInfo = useSelector((state: any) => state.credits.userCreditInfo )
    const userList = useSelector((state: any) => state.users.userList )
    const categoryList = useSelector((state: any) => state.categories.categoryList )

    React.useEffect(() => {
        if(isUser(authenticateUser.data)) {
            // @ts-ignore
            dispatch(creditInfoActions.getUserCreditInfo())
            fetchCategoryList()
        }

        if(isAdmin(authenticateUser.data)) {
            // @ts-ignore
            dispatch(userActions.getUserList())
        }

    }, [])

    React.useEffect(() => {
        if(userCreditInfo.data?.creditLimit !==null && userCreditInfo.data?.usedCredits !== null) {
            const used = userCreditInfo.data?.usedCredits || 0
            const total = userCreditInfo.data?.creditLimit || 0
            const available = total - used
            const newChartData = [{
                name: 'Used Credits',
                data: [used]
            },
                {
                    name: 'Available Credits',
                    data: [available]
                }]
            setCreditUsageChartData(newChartData)
        }

    }, [userCreditInfo])

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const isAdmin = (data: SignInResponseDto) => {
        return data?.userRole?.userRoleId === USER_ROLE_IDS.ADMIN
    }

    const isUser = (data: SignInResponseDto) => {
        return data?.userRole?.userRoleId === USER_ROLE_IDS.USER
    }

    const fetchCategoryList = () => {
        // @ts-ignore
        dispatch(categoryActions.getCategories())
    }

    const onToggleCategoryDialog = (status: boolean, mode: CATEGORY_DIALOG_MODES | null, id=0) => {
        setCategoryDialogOpen(status)
        // @ts-ignore
        setCategoryDialogMod(mode)
        setCategoryFormData(INITIAL_CATEGORY_FORM_DATA)
        if(mode===CATEGORY_DIALOG_MODES.EDIT) {
            // @ts-ignore
            dispatch(categoryActions.getCategory(id, data => {
                setCategoryFormData({
                    ...categoryFormData,
                    categoryId: {...categoryFormData.categoryId, value: data.categoryId},
                    categoryName: {...categoryFormData.categoryName, value: data.name},
                    categoryNote: {...categoryFormData.categoryNote, value: data.note as string},
                    categoryStatus: {...categoryFormData.categoryStatus, value: data.status},
                })
            }))
        }
    }

    const onSaveCategory = async (data: any, mod: CATEGORY_DIALOG_MODES | null) => {
        const [validatedData, isValid] = await formValidator(data)
        setCategoryFormData(validatedData)

        if(isValid){
            const payload: CategoryCreateDto = {
                name: validatedData.categoryName.value,
                note: validatedData.categoryNote.value,
                status: validatedData.categoryStatus.value,
                userId: authenticateUser.data.userId
            }

            if(mod===CATEGORY_DIALOG_MODES.CREATE) {
                // @ts-ignore
                dispatch(categoryActions.createCategory(payload, () => {
                    onToggleCategoryDialog(false, null)
                    fetchCategoryList()
                }))
            }
            if(mod===CATEGORY_DIALOG_MODES.EDIT){
                // @ts-ignore
                dispatch(categoryActions.updateCategory(validatedData.categoryId.value, payload, () => {
                    onToggleCategoryDialog(false, null)
                    fetchCategoryList()
                }))
            }

        }
    }

    const onCategoryFormChange = (property: string, value: any) => {
        switch (property) {
            default:
                setCategoryFormData({
                    ...categoryFormData,
                    [property]: {
                        ...categoryFormData[property as keyof typeof categoryFormData],
                        value: value,
                        error: null
                    }
                })
        }
    }

    return(
        <React.Fragment>
            <AppLayout open={open} toggleDrawer={toggleDrawer}>
                <CategoryDialog
                    open={categoryDialogOpen}
                    onClose={() => onToggleCategoryDialog(false, null)}
                    formData={categoryFormData}
                    onFormChange={onCategoryFormChange}
                    onSave={onSaveCategory}
                    mod={categoryDialogMod}
                />
                <Grid container spacing={3}>
                    <Grid item container xs={12}>
                       <Grid item xs={10}>
                           <Typography variant="h5">Hi {authenticateUser.data.firstName} !</Typography>
                           <Typography variant="subtitle1">Welcome to Bumble Bee, the online loan offering platform</Typography>
                       </Grid>
                        {isAdmin(authenticateUser.data) && (
                            <Grid item xs={2} textAlign="right">
                                <Chip label="Administrator Preview" color="error" avatar={<Avatar sx={{ bgcolor: amber}}><AdminPanelSettingsIcon /> </Avatar>} />
                            </Grid>
                        )}
                    </Grid>

                    {isUser(authenticateUser.data) && (
                        <React.Fragment>
                            <Grid item xs={12} md={8} lg={9}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 220,
                                    }}
                                >
                                    <CreditUsage
                                        chartData={creditUsageChartData}
                                    />
                                </Paper>
                            </Grid>

                            <Grid item xs={12} md={4} lg={3}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 220,
                                    }}
                                >
                                    <CreditLimit
                                        userCreditInfo={userCreditInfo.data}
                                    />
                                </Paper>
                            </Grid>
                        </React.Fragment>
                    )}

                    {isUser(authenticateUser.data) && (
                        <Grid item xs={12}>
                            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                <ProductList />
                            </Paper>
                        </Grid>
                    )}

                    {isAdmin(authenticateUser.data) && (
                        <Grid item xs={12}>
                            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                <UserList userList={userList.data} />
                            </Paper>
                        </Grid>
                    )}

                    {isUser(authenticateUser.data) && (
                        <React.Fragment>
                            <Grid item xs={12} md={6} lg={6}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}
                                >
                                    <CategoryList
                                        categoryList={categoryList.data}
                                        onCategoryCreate={() => onToggleCategoryDialog(true, CATEGORY_DIALOG_MODES.CREATE)}
                                        onRefresh={fetchCategoryList}
                                        onCategoryUpdate={(id) => onToggleCategoryDialog(true, CATEGORY_DIALOG_MODES.EDIT, id)}
                                    />
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={6} lg={6}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}
                                >
                                    <BrandList
                                        brandList={[]}
                                    />
                                </Paper>
                            </Grid>
                        </React.Fragment>
                    )}

                </Grid>
            </AppLayout>
        </React.Fragment>
    )
}

export default Dashboard