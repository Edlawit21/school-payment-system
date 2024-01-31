import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import "./Report.css"
import { Table, Select } from 'antd';
import { useState } from 'react';

function Report() {
  
  const columns = [
    {
      key:'1',
      title: 'ID',
      dataIndex: 'id',
      sorter: {
        compare: (a, b) => a.chinese - b.chinese,
        multiple: 3,
      }
    },
    {
      key:'2',
      title: 'Payer',
      dataIndex: 'payer',
      sorter: {
        compare: (a, b) => a.chinese - b.chinese,
        multiple: 3,
      },
    },
    {
      key:'3',
      title: 'Grade ',
      dataIndex: 'grade',
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 2,
      },
    },
    {
      key:'4',
      title: 'Sec.',
      dataIndex: 'sec',
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
    {
      key:'5',
      title: 'Remaining ',
      dataIndex: 'remaining',
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
    {
      key:'6',
      title: 'Date ',
      dataIndex: 'date',
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
    {
      key:'7',
      title: 'Serial ',
      dataIndex: 'serial',
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
    {
      key:'8',
      title: 'Amount ',
      dataIndex: 'amount',
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
    {
      key:'9',
      title: 'Reason ',
      dataIndex: 'reason',
      width:'20%',
      align:'left'
    },
    {
      key:'10',
      title: 'Reference ',
      dataIndex: 'reference',
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
   
  ];
  
  // eslint-disable-next-line no-unused-vars
  const[dataSource, setDataSource] = useState([
    {
      id:'0001',
      payer:'Abebe Bekelle Chala',
      grade: 1,
      sec: 'A',
      remaining:'$ 0.00',
      date:'0000-00-00',
      serial:'00000',
      amount:'$0000.00',
      reason:'lorem ipsum lorem ipusm lorem ipusm lorem ipusm',
      reference:'00000',
      
    },
    
  ]);

const { Option } = Select;
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
  
const [currentPage, setCurrentPage] = useState(1); 
const pageSizeOptions = ['10', '20', '30', '40', '50'];
const defaultPageSize = 10;
const totalEntries = dataSource.length; 

const pagination = {
  pageSizeOptions,
  showSizeChanger: true,
  showQuickJumper: true,
  defaultPageSize,
  total: totalEntries,
  current: currentPage,
  onChange: (page, pageSize) => {
    setCurrentPage(page);
  },
  showTotal: (total) => `Showing ${total} Entries`,
  position: ['bottomCenter'],
};

const [selectedGrade, setSelectedGrade] = useState(null);

const handleClick = (grade) => {
  setSelectedGrade(grade === selectedGrade ? null : grade);
};

const gradeList = [
  'G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9', 'G10', 'G11', 'G12'
];

  return (
    <div>
      <div className='top-repo'>
        <label style={{marginLeft:'30px', display:'flex', alignItems:'center'}}>DATE:</label>
        <input type='date' name='date'/>
        <button className='btnr1'>My Payments</button>
        <button className='btnr'>Other Payments</button>
        <button className='btnr'> Removed Payments</button>
      </div>
      <div>
      <Select className='repo-entry' defaultValue="50" onChange={handleChange}>
          <Option value="50">50</Option>
          <Option value="20">20</Option>
          <Option value="10">10</Option>
          <Option value="30">30</Option>
        </Select>
        <label  >Entries per page</label>
        <div className='search2'>
          <input type='search' name='search' placeholder='Search' />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>

      <Table  className='table-rep' columns={columns} style={{ boxShadow:' 0 0 10px rgba(0, 0, 0, 0.2)', height:'65vh', background:'white', marginTop:'10px', width:'90vw', marginLeft:'100px' }} dataSource={dataSource}  pagination={pagination}
         scroll={{
          y: 'calc(65vh - 180px)', 
          x: 'max-content', 
        }}    
      />
      
      <div className='rep-grades'>
      <button className='btn-grade-rep'>
        {gradeList.map((grade) => (
          <div
            key={grade}
            className={`grade-item ${selectedGrade === grade ? 'selected' : ''}`}
            onClick={() => handleClick(grade)}
          >
            {grade}
          </div>
        ))}
      </button>
      {selectedGrade && (
        <div className='selected-content'>
          
        </div>
      )}
    </div>
      </div>
      
      
   
     
    
  );
};

export default Report;
