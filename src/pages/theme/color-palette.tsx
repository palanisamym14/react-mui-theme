import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ThemeUI from './theme-ui';
import { Colors } from './color';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export default function ColorPalette({ trigger }: any) {

    const [isOpen, setIsOpen] = React.useState(false);
    const [primaryColor, setPrimaryColor] = React.useState('blue');
    const [secondaryColor, setSecondaryColor] = React.useState("white");

    const showModal = () => setIsOpen(true);
    const hideModal = () => {
        setIsOpen(false);
    };
    const clonedTrigger = React.cloneElement(trigger, { onClick: showModal });
    const colors = Object.keys(Colors).map((key) => ({ code: key }));

    return (
        <div>
            <div className="cursor-pointer">{clonedTrigger}</div>
            <Modal
                open={isOpen}
                onClose={hideModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>

                    <Grid container mt={6}>
                        <Grid xs={6} sm={6} md={6}>
                            <Typography variant="h6" component="h2"> Primary</Typography>
                            <Box
                                sx={{
                                    width: 180,
                                    height: 180,
                                }}>
                                <Grid container>
                                    {colors.map((item) =>
                                        <Grid item xs={3} sm={3} md={3} style={{ backgroundColor: Colors[item.code]}}>
                                            <Button fullWidth style={{ height: '40px' }} onClick={() => setPrimaryColor(item.code)} />

                                        </Grid>
                                    )}
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid xs={6} sm={6} md={6}>
                            <Box
                                sx={{
                                    width: 180,
                                    height: 180,
                                }}>
                                <Typography variant="h6" component="h2"> Secondary</Typography>
                                <Grid container>
                                    {colors.map((item) =>
                                        <Grid item xs={3} sm={3} md={3} style={{ backgroundColor: Colors[item.code] }}>
                                            <Button fullWidth style={{ height: '40px' }} onClick={() => setSecondaryColor(item.code)} />
                                        </Grid>
                                    )}
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid xs={6} sm={6} md={6}>
                            <ThemeUI primaryColor={primaryColor}
                                secondaryColor={secondaryColor} onClose={hideModal}/>
                        </Grid>

                    </Grid>
                </Box>
            </Modal>
        </div>
    );
}
