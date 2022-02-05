import { motion, useAnimation } from 'framer-motion';

import Box from 'components/lib/Box';
import PropTypes from 'prop-types';
import Text from 'components/lib/Text';
import theme from 'style/theme';
import { useEffect } from 'react';

const Modal = ({ children, showModal, closeModal }) => {
  const controlAnimation = useAnimation();

  useEffect(() => {
    if (showModal) {
      controlAnimation.start({
        x: '0',
        y: 'calc(50vh - 50% )',
        transition: {
          duration: 0.5,
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
  }, [showModal, controlAnimation]);

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
          {children}
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

Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Modal.defaultProps = {
  closeModal: () => {},
};

export default Modal;
