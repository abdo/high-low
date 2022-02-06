import { motion, useAnimation } from 'framer-motion';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Box from 'components/lib/Box';
import Text from 'components/lib/Text';
import { hideModal } from 'store/general/actions';
import theme from 'style/theme';

const Modal = () => {
  const { showModal, content, isModalNotClosable, isNotification, noEase } =
    useSelector((state) => ({
      showModal: state.general.showModal,
      content: state.general.modalContent,
      isModalNotClosable: state.general.isModalNotClosable,
      isNotification: state.general.isTemporaryModal,
      noEase: state.general.noModalEase,
    }));

  const dispatch = useDispatch();

  const closeModal = useCallback(() => {
    dispatch(hideModal());
  }, [dispatch]);

  const controlAnimation = useAnimation();

  useEffect(() => {
    if (isNotification) {
      setTimeout(() => {
        closeModal();
      }, 1000);
    }
  }, [isNotification, closeModal]);

  useEffect(() => {
    if (showModal) {
      controlAnimation.start({
        x: '0',
        y: 'calc(50vh - 50% )',
        transition: noEase
          ? {}
          : {
              duration: 5,
              ease: 'easeInOut',
              type: 'spring',
              stiffness: 100,
            },
      });
    } else {
      controlAnimation.start({
        x: '0',
        y: '-100%',
        display: 'none',
        transition: {
          duration: 0.5,
          ease: 'easeOut',
        },
      });
    }
  }, [showModal]); // eslint-disable-line

  return (
    <>
      <Box
        as={motion.div}
        animate={controlAnimation}
        initial={{ display: 'none' }}
        position='absolute'
        alignItems='center'
        justifyContent='center'
        bgc={theme.colors.main}
        borderRadius='2rem'
        b={`2px solid ${theme.colors.white}`}
        zIndex={4}
      >
        <Box position='relative' p='3rem'>
          {content}
          <Box
            borderRadius='50%'
            bgc={theme.colors.white}
            w='3rem'
            h='3rem'
            position='absolute'
            top='-1rem'
            right='-1rem'
            display='flex'
            alignItems='center'
            justifyContent='center'
            pointer
            onClick={closeModal}
            hidden={isModalNotClosable || isNotification}
          >
            <Text
              type='h3'
              color={theme.colors.danger}
              containerProps={{ m: '-0.2rem 0 0 -0.1rem' }}
            >
              <span>&#10005;</span>
            </Text>
          </Box>
        </Box>
      </Box>
      <Box
        hidden={!showModal}
        w='100vw'
        h='100vh'
        position='absolute'
        zIndex={3}
      ></Box>
    </>
  );
};

export default Modal;
