<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\MutationRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=MutationRepository::class)
 */
class Mutation
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     *
     */
    private $id;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $date;

    /**
     * @ORM\Column(type="string", length=62)
     */
    private $type;

    /**
     * @ORM\Column(type="float")
     */
    private $value;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $dispositionNumber;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $departmentCode;

    /**
     * @ORM\Column(type="float")
     */
    private $realSurface;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $landSurface;

    /**
     * @ORM\Column(type="string", length=62, nullable=true)
     */
    private $natureCode;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(?\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): self
    {
        $this->type = $type;

        return $this;
    }

    public function getValue(): ?float
    {
        return $this->value;
    }

    public function setValue(float $value): self
    {
        $this->value = $value;

        return $this;
    }

    public function getDispositionNumber(): ?string
    {
        return $this->dispositionNumber;
    }

    public function setDispositionNumber(?string $dispositionNumber): self
    {
        $this->dispositionNumber = $dispositionNumber;

        return $this;
    }

    public function getDepartmentCode(): ?int
    {
        return $this->departmentCode;
    }

    public function setDepartmentCode(?int $departmentCode): self
    {
        $this->departmentCode = $departmentCode;

        return $this;
    }

    public function getRealSurface(): ?float
    {
        return $this->realSurface;
    }

    public function setRealSurface(float $realSurface): self
    {
        $this->realSurface = $realSurface;

        return $this;
    }

    public function getLandSurface(): ?float
    {
        return $this->landSurface;
    }

    public function setLandSurface(?float $landSurface): self
    {
        $this->landSurface = $landSurface;

        return $this;
    }

    public function getNatureCode(): ?string
    {
        return $this->natureCode;
    }

    public function setNatureCode(?string $natureCode): self
    {
        $this->natureCode = $natureCode;

        return $this;
    }
}
