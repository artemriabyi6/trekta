

import Header from "../../components/header/Header";
import { useState } from 'react';
import styles from './ModelUploadForm.module.scss';
import { images } from "../../utils/images";

const ModelUploadForm = () => {
  const [fillPercentage, setFillPercentage] = useState(20);
  const [selectedMaterial, setSelectedMaterial] = useState('PLA');
  const [selectedFile, setSelectedFile] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('+380');
  const [companyName, setCompanyName] = useState('');
  const [comment, setComment] = useState('');

  const handleMaterialClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const materials = [
    { id: 1, image: images.project1 },
    { id: 2, image: images.project1 },
    { id: 3, image: images.project1 },
    { id: 4, image: images.project1 },
    { id: 5, image: images.project1 },
    { id: 6, image: images.project1 },
    { id: 7, image: images.project1 },
    { id: 8, image: images.project1 },
    { id: 9, image: images.project1 },
    { id: 10, image: images.project1 },
    { id: 11, image: images.project1 },
    { id: 12, image: images.project1 },
    { id: 13, image: images.project1 },
    { id: 14, image: images.project1 },
    { id: 15, image: images.project1 },
    { id: 16, image: images.project1 },
    { id: 17, image: images.project1 },
  ];

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setSelectedFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = {
      file: selectedFile ? selectedFile.name : 'Файл не вибрано',
      material: selectedMaterial,
      fillPercentage: `${fillPercentage}%`,
      selectedTemplate: activeIndex !== null ? `Шаблон ${activeIndex + 1}` : 'Шаблон не вибрано',
      phoneNumber,
      companyName,
      comment: comment || 'Коментар відсутній'
    };
    
    console.log('Дані форми:', formData);
    
    
  };

  return (
    <main>
      <Header/>
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <div className={styles.formSection}>
            <h2 className={styles.title}>ЗАПОВНІТЬ ПОВНУ ФОРМУ</h2>
            <div className={styles.formHeader}>
              <h3 className={styles.subtitle}>SLS FORM</h3>
              <h4 className={styles.sectionTitle}>ЗАВАНТАЖЕННЯ</h4>
            </div>

            <div className={styles.uploadSection}>
              <p className={styles.uploadTitle}>Завантажити файл 3D-моделі</p>
              <p className={styles.fileFormats}>формат *.STL (*.OBJ, 3MF)</p>
              
              <div 
                className={styles.dropZone}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
              >
                <input
                  type="file"
                  id="model-upload"
                  className={styles.fileInput}
                  accept=".stl,.obj,.3mf"
                  onChange={handleFileChange}
                />
                <label htmlFor="model-upload" className={styles.dropZoneContent}>
                  {selectedFile ? (
                    <p className={styles.fileName}>{selectedFile.name}</p>
                  ) : (
                    <>
                      <p>Выберіть файли або перетягніть сюди</p>
                    </>
                  )}
                </label>
              </div>
            </div>

            <div className={styles.materialsSection}>
              <h4 className={styles.sectionTitle}>МАТЕРІАЛИ</h4>
              <div className={styles.materialGrid}>
                {[
                  'ABS', 'ABS+', 'ABS pro', 'PCTG',
                  'PLA', 'Elastan D100', 'Elastan D70',
                  'Elastan D70-CCF', 'Гнучкі (TPU 40D, TPU 85A та інші)',
                  'coPET'
                ].map((material) => (
                  <button
                    key={material}
                    type="button"
                    className={`${styles.materialButton} ${
                      selectedMaterial === material ? styles.active : ''
                    }`}
                    onClick={() => setSelectedMaterial(material)}
                  >
                    {material}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.chooseMaterialType}>
            <h2 className={styles.title}>ШАБЛОН ЗАПОВНЕННЯ МОДЕЛІ:</h2>
            <div className={styles.fillPercentage}>
              <div className={styles.materialsContainer}>
                {materials.map((material, index) => (
                  <div
                    key={material.id}
                    className={`${styles.materialBlock} ${activeIndex === index ? styles.active : ''}`}
                    onClick={() => handleMaterialClick(index)}
                  >
                    <img src={material.image} alt={material.name} />
                  </div>
                ))}
              </div>
            </div>
            <span className={styles.subTitle}>Щільність заповнення моделі, %</span>
            <div className={styles.percentageOptions}>
              {[15, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((percent) => (
                <button
                  key={percent}
                  type="button"
                  className={`${styles.percentageButton} ${
                    fillPercentage === percent ? styles.active : ''
                  }`}
                  onClick={() => setFillPercentage(percent)}
                >
                  {percent}%
                </button>
              ))}
            </div>
          </div>
          
          <div className={styles.userInfo}>
            <div className={styles.formGroup}>
              <label htmlFor="phone">КОНТАКТНИЙ НОМЕР ТЕЛЕФОНУ *</label>
              <input
                type="tel"
                id="phone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className={styles.inputField}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="company">ІМ'Я, НАЗВА КОМПАНІЇ</label>
              <input
                type="text"
                id="company"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className={styles.inputField}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="comment">КОМЕНТАР</label>
              <textarea
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className={styles.textareaField}
                placeholder="Напишіть Ваш коментар, якщо він потрібен"
              />
            </div>
            
            <button type="submit" className={styles.submitButton}>
              Відправити заявку
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default ModelUploadForm;