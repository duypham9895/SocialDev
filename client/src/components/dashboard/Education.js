import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteEducation } from '../../actions/profile';

const Education = ({ education, deleteEducation }) => {
    return (
        <Fragment>
            <h2 className='my-2'>Experinece Credentials</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>School</th>
                        <th className='hide-sm'>Degree</th>
                        <th className='hide-sm'>Years</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {education.map(edu => {
                        return (
                            <tr key={edu._id}>
                                <td>{edu.school}</td>
                                <td className='hide-sm'>{edu.degree}</td>
                                <td className='hide-sm'>
                                    <Moment format='DD/MM/YYYY'>
                                        {edu.from}
                                    </Moment>{' '}
                                    -
                                    {edu.to === null && edu.current ? (
                                        ' Now'
                                    ) : (
                                        <Moment format='DD/MM/YYYY'>
                                            {edu.to}
                                        </Moment>
                                    )}
                                </td>
                                <td>
                                    <button
                                        onClick={() => deleteEducation(edu._id)}
                                        className='btn btn-danger'
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Fragment>
    );
};

Education.propTypes = {
    education: PropTypes.array.isRequired,
    deleteEducation: PropTypes.func.isRequired
};

export default connect(
    null,
    { deleteEducation }
)(Education);
